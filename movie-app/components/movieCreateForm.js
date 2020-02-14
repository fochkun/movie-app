import { useState, useEffect } from "react";


const MovieCreateForm = (props) => {

    const [ isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

    const defaultData = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: '',
    }
    const formData = props.initialData ? {...props.initialData} : defaultData;
    const [form, setForm] = useState(formData);

    // useEffect(()=>{
    //     // console.log('initial data',props.initialData);
    //     if (props.initialData){
    //         setForm(props.initialData)
    //         setIsInitialDataLoaded(true);
    //     }
    // },[isInitialDataLoaded])

    const handleChange = (event) => {
        const {name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleGenreChange = (event) => {
        const {options} = event.target;
        let value = [...options]
            .filter(option=>option.selected) // get only selected genres
            .map(option=>option.value); // write name of HTMLOptionElement
        setForm({
            ...form, genre: value.toString()
        })
    }

    const submitForm = () => {
        props.handleFormSubmit({...form});
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChange}
                    value = {form.name}
                    name = "name"
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input 
                    onChange={handleChange}
                    value = {form.description}
                    name="description" 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input 
                    onChange={handleChange}
                    value = {form.rating}
                    name = "rating" 
                    type="number" 
                    max="5" min="0" 
                    className="form-control" 
                    id="rating" 
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input 
                    onChange={handleChange}
                    value = {form.image}
                    name = "image" 
                    type="text" 
                    className="form-control" 
                    id="image" 
                    placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input 
                    onChange={handleChange}
                    value = {form.cover}
                    name = "cover" 
                    type="text" 
                    className="form-control" 
                    id="cover" 
                    placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea 
                    onChange={handleChange}
                    value = {form.longDesc}
                    name = "longDesc"
                    className="form-control" 
                    id="longDesc" 
                    rows="3">
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select 
                    onChange={handleGenreChange}
                    multiple 
                    className="form-control" 
                    id="genre">
                        <option>drama</option>
                        <option>music</option>
                        <option>adventure</option>
                        <option>historical</option>
                        <option>action</option>
                </select>
            </div>
            <button 
                onClick={submitForm} 
                type="button" 
                className="btn btn-primary">
                    {props.submitButton || 'Create'}
            </button>
        </form>
    )
}

export default MovieCreateForm;