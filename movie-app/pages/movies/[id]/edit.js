import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById } from "../../../actions";


class EditMovie extends React.Component {

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id);
        console.log('get movie',movie);
        return {movie};
    }

    // state = {
    //     movie: {
    //         name: '',
    //         description: '',
    //         rating: '',
    //         image: '',
    //         cover: '',
    //         longDesc: '',
    //     }
    // }

    // componentDidMount() {
    //     const { id } = this.props.query;
    //     getMovieById(id).then(movie=>{
    //        this.setState({movie});
    //     })
    // }
    
    render() {
        const {movie} = this.props;
        console.log('movie',movie);
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm initialData={movie}/>
            </div>
        )
    }
}

export default EditMovie;