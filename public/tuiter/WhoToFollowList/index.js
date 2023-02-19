import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () =>{
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                 <p class="fw-bold mb-0">Who to follow</p>
            </li>
            
            ${who.map(user =>{
                return (WhoToFollowListItem(user));
                }).join('')
            }
        </ul>
    `);
}

export default WhoToFollowList;