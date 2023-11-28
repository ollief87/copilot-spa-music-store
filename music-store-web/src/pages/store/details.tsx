import { Album } from "@/models/album";
import { GetServerSideProps } from "next";

type StoreDetailsProps = {
    album: Album;
};

// NextJS store details page
export default function StoreDetails({ album }: StoreDetailsProps) {
    return (
        <div>
            <h2>Album: {album.title}</h2>
            <p>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={album.albumArtUrl} alt={album.title} />
            </p>
            <dl>
                <dt>Genre:</dt>
                <dd>{album.genre?.name}</dd>
                <dt>Artist:</dt>
                <dd>{album.artist?.name}</dd>
                <dt>Price:</dt>
                <dd>{album.price}</dd>
            </dl>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query.id; 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/albums/${id}`); 
    const album = await res.json() as Album;

    return {
        props: { 
            album
        },
    };
};