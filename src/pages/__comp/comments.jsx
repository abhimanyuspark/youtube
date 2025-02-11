import react , {useEffect} from 'react'
import {
  SlLike,
  SlDislike,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "../../assets/Icons";
import { useParams } from "react-router";
import { fetchVideoComments } from '../../redux/server/server';
import {useSelector , useDispatch} from 'react-redux'

export const Comments = () => {
    const { Comment } = useSelector((state) => state.allcomments);
  const { id } = useParams();
  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchVideoComments(id));
    }, [dispatch, id]);
  
console.log(Comment)
    return(
        <>
       
        </>
    )
}
const Replys = () => {
    const [reply, setReply] = useState(true);
  
    return (
      <div
        className="flex items-center text-blue-400"
        onClick={() => setReply(!reply)}
      >
        {reply ? (
          <MdOutlineKeyboardArrowDown className="text-3xl font-thin" />
        ) : (
          <MdOutlineKeyboardArrowUp className="text-3xl font-thin" />
        )}{" "}
        replies
      </div>
    );
  };