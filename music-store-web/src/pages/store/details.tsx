import { Album } from "@/models/album";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from 'next/image'

type StoreDetailsProps = {
    album: Album;
};

export default function StoreDetails({ album }: StoreDetailsProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-full max-w-md mx-auto mb-5">
                <h2 className="text-2xl font-bold mb-5">Album: {album.title}</h2>
                <p>
                    <Image src={album.albumArtUrl} alt={album.title} width={350} height={150} className="w-full shadow-lg rounded-lg" />
                </p>
                <dl className="mt-5 space-y-2">
                    <div>
                        <dt className="font-semibold">Genre:</dt>
                        <dd>{album.genre?.name}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Artist:</dt>
                        <dd>{album.artist?.name}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Price:</dt>
                        <dd>{album.price}</dd>
                    </div>
                </dl>
            </div>
            <Link href={`/store/browse?genre=${album.genre?.name}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to {album.genre?.name}
            </Link>
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