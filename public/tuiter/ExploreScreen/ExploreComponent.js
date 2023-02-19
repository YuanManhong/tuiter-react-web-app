import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row ms-0 me-0">
                <div class="col-11 pe-2 ps-0">
                    <div class="position-relative">
                        <span class="fa-solid fa-magnifying-glass text-secondary position-absolute glassPosition text-dark"></span>
                        <input class="form-control rounded-pill ps-5"  placeholder="Search Tuiter"/>
                    </div>
                </div>
                <div class="col-1 align-self-center pe-0">
                    <i class="fa-solid fa-gear fa-xl text-primary float-end"></i>
                </div>
            </div>
            <!--content-->
            <div class="mt-2">
                <ul class="nav nav-fill  mb-2">
                    <li class="nav-item border border-bottom-0 rounded-top border-primary">
                        <a class="nav-link active text-white bg-primary" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item  border-bottom">
                        <a class="nav-link text-white" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item  border-bottom">
                        <a class="nav-link text-white" href="news.html">News</a>
                    </li>
                    <li class="nav-item  border-bottom">
                        <a class="nav-link text-white" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item border-bottom d-xs-none d-sm-none d-md-block">
                        <a class="nav-link text-white ps-2 pe-2 " href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
                <div class="position-relative">
                    <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XHZEVUvBcJNGjbypZBP-VMfZwe_Zi1kFsQ&usqp=CAU"/>
                    <h1 class="ps-1 position-absolute bottom-0 start-0" style="color: #2d2d2d">
                        SpaceX's Starship
                    </h1>
                </div>
                ${PostSummaryList()}
            </div>
        
    `);
}
export default ExploreComponent;