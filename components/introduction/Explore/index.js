import ExploreCard from './ExploreCard';

const links = [
    {
        img: "images/homepage/application.png",
        title: "Articles",
        link: "/articles",
        description: "Search individual articles by tags"
    },
    {
        img: "images/homepage/search.png",
        title: "Global Search",
        link: "/search",
        description: "View full transcripts and articles by individual keywords"
    },
    {
        img: "images/homepage/recipes.png",
        title: "Recipes",
        link: "/recipes",
        description: "View a list of Aajonus Vonderplanitz raw food recipes"
    },
    {
        img: "images/homepage/blog.png",
        title: "Blogs",
        link: "/blogs",
        description: "VIew primal health & lifestyle blogs"
    },
];

const linkElements = links.map(((link, index) => {
    return (
        <ExploreCard
            key={index}
            img={link.img}
            title={link.title}
            link={link.link}
            description={link.description}
        />
    )
}));

const Explore = () => {


    return (
        <div className=" px-2 md:px-8 py-4 mb-28">
            <h2 className="text res-heading-lg text-center mb-8">
                Explore
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">

                {linkElements}
            </div>

        </div>
    )
};


export default Explore;