import './styles.css'

export const PostCard = ({title, body, cover, id}) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-content'>
            <h2>{title} {id}</h2>
            <p>{body}</p>
        </div>
    </div>
)

// export const PostCard = ({post}) => {
//     const post = props.post;
//     const { post } = props;

//     return (       
//         <div className='post'>
//               <img src={post.cover} alt={post.title} />
//               <div className='post-content'>
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//               </div>
//             </div>
//     );
// }