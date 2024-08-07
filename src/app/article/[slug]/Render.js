"use server";
import Link from "next/link";
import Head from "next/head";
import {RichText} from "@graphcms/rich-text-react-renderer";
import {nanoid} from "nanoid";
import {IoIosArrowBack, IoIosDownload} from "react-icons/io";
//import ReactAudioPlayer from "react-audio-player";
import {TextParser} from '../../../../utils/classes/utility/TextParser';
import Download from "@/app/article/Download";
import dynamic from 'next/dynamic';


import styles from 'react-jinke-music-player/assets/index.module.css'
import MusicPlayer from "@/app/article/MusicPlayer";

const Slug = ({article, dotNetResponse}) => {

    console.log("article");
    console.log(article);

    const tagElems = article.tags.map((tag) => {
        return (
            <div key={nanoid()} className='px-2 py-1 rounded-full border inline-block '>
                <p className='text-slate-500 res-text-xs'>{tag.text}</p>
            </div>
        );
    });


    return (
        <div className=" bg-white p-4 pb-32 min-h-screen">
            <div>
                <div className="mx-auto max-w-4xl">
                    <Link href={'/articles'} className=' res-text-base cursor-pointer'>

                        <div className="inline-flex items-center hover:text-blue-500 mb-4">
                            <IoIosArrowBack
                                className='text-xl'
                            />
                            <p className='link'>
                                Back to
                                articles
                            </p>
                        </div>
                    </Link>
                    {/** Heading */}
                    <div className="flex justify-between items-center border-b-2 border--secondary pb-4">

                        <h1 className="res-heading-2xl">
                            {article.title}
                        </h1>

                        {/*<FaRegBookmark*/}
                        {/*    className='text-3xl text-slate-500 hover:text-slate-950 cursor-pointer transition'*/}
                        {/*/>*/}

                    </div>
                    {/** End of heading */}

                    {/*<ReactAudioPlayer*/}
                    {/*    src={article.audio.url}*/}
                    {/*    autoPlay*/}
                    {/*    controls*/}
                    {/*/>*/}
                    <div className="overflow-auto">

                        {/** Article text */}
                        <div className="pr-4 inline">

                            <div className=' pt-4 pr-4'>
                                <div className="text-renderer">

                                </div>
                            </div>
                        </div>
                        {/** End of article text */}
                        <MusicPlayer article={article}/>
                        <div
                            className='w-full w- mb-6 sm:!w-40 ml-4  float-right border--secondary md:border-l-2 pl-2'>
                            <h5 className='res-heading-xs font-bold mb-2'>Tags</h5>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {tagElems}
                            </div>
                            <div>
                                <Download article={article}/>

                            </div>
                        </div>
                        <div>
                            <div className="text-renderer">

                                <RichText
                                    content={article.content.raw}
                                    renderers={{
                                        bold: ({children}) => <strong>{children}</strong>,
                                    }}
                                ></RichText>
                            </div>
                        </div>


                        {/** Right sidebar */}

                        {/** End of right sidebar */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slug;
