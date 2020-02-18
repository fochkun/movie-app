import Axios from "axios"

export default async (req,res)=>{

    console.log('\n\n\n REQ METHOD: ',req.method,'\n\n\n\n');
    const methods={
        POST: async  ()=>{
            const postData = JSON.parse(req.body);
            console.log(postData);

            return {
                status : 'Saving Post to DB!',
                ...postData
            }
        },
        GET: async ()=>{
            const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data
            console.log('\n\n\n posts: ',posts,'\n\n\n\n');
            return posts.slice(0,20);
        }
    }
    if (methods[req.method]) {
        const result = await methods[req.method]();
        return res.json(result);
    }
    return res.status(500).send('posts broke!');
}
