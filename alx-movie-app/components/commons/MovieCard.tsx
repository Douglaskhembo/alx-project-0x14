const MovieCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mt-2">Movie Title</h2>
            <p className="text-gray-600 mt-1">Release Date: 2023</p>
            <p className="text-gray-800 mt-2">This is a brief description of the movie. It gives an overview of the plot and main characters.</p>
        </div>
    );
}
export default MovieCard;