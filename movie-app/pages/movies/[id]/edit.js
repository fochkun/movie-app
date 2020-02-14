import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";
import Router from "next/router";


class EditMovie extends React.Component {

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id);
        console.log('get movie',movie);
        return {movie};
    }

    handleUpdateMovie(movie) {
        updateMovie(movie).then((movie) => {
        //   router.push('/');
            Router.push(`/movies/${movie.id}`)
        })
      }
    
    render() {
        const {movie} = this.props;
        console.log('movie',movie);
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm 
                    submitButton="Update"
                    handleFormSubmit={this.handleUpdateMovie} 
                    initialData={movie}/>
            </div>
        )
    }
}

export default EditMovie;