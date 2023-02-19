const PostSummaryItem = (post) =>{
    return (`
        <div class="list-group-item">
            <div class="row">
                <div class="col-11 col-md-9 col-sm-8">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div>
                        <p class="fw-bold">
                            ${post.userName}
                            <i class="fa-solid fa-circle-check"></i>
                            <small class="text-muted fw-normal"> - ${post.time}</small><br/>
                            ${post.title}
                        </p>

                    </div>
                </div>
                <div class="col-1 col-md-3 col-sm-4 float-end">
                    <img class="img-fluid" src="${post.image}"
                         width="100px" height="100px" class="float-end"/>
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryItem;