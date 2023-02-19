const PostItem = (post) => {
    return (`
    <div class="container border-bottom border-light pb-0 pt-3 border-start border-end">
        <div class="row">
            <div class="col-2">
                <img class="img-fluid float-start rounded-circle" src="../../images/${post.userIcon}"/>
            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-11">
                        <div class="text-white fw-bold">
                            ${post.userName}
                            <i class="fa-solid fa-circle-check"></i>
                            <small class="text-muted fw-normal">@${post.handle} · ${post.timeHour}</small>
                        </div>
                    </div>
                    <div class="col-1">
                        <a class="text-decoration-none text-light fw-bold" href="#">...</a>
                    </div>
                </div>
                <div>
                    <p>${post.message}</p>
                </div>
                <div class="border rounded-3 border-light mt-2 mb-3">
                    <img  class="img-fluid border-bottom border-light ${post.contentTitle && post.content ? 'rounded-top' : 'rounded'}" src="../../images/${post.image}"/>
                  
                    ${post.contentTitle ? `<div class="ps-3 pe-3 pt-2 text-white">${post.contentTitle}</div>`: ''}
                    
                    ${post.content ? `<div class="ps-3 pe-3  two-line-truncate text-muted">${post.content}</div>`: ''}
                    
                    ${post.link ? `<div class="ps-3 pe-3 mb-2 two-line-truncate text-muted"><i class="fa-solid fa-link text-light"></i>${post.link}</div>` : ''}
                </div>
                <div class="row pe-3">
                        <div class="col-3">
                            <a class="text-decoration-none row " href="#"">
                                <i class="col-4 pe-0 fa-sharp fa-solid fa-comment text-muted"></i>
                                <p class="col-5 ps-0 text-muted">${post.talk}</p>
                            </a>
                        </div>
                        <div class="col-3">
                           <a class="text-decoration-none row" href="#"">
                                <i class="col-4 pe-0 fa-solid fa-arrows-rotate text-muted"></i>
                                <p class="col-5 ps-0 text-muted">${post.repost}</p>
                            </a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none row" href="#"">
                                <i class="col-4 pe-0 fa-solid fa-heart text-muted"></i>
                                <p class="col-5 ps-0 text-muted">${post.like}</p>
                            </a>
                        </div>
                        <div class="col-3">
                            <a class="text-decoration-none row" href="#"">
                                <i class="col-4 pe-0 fa-solid fa-upload text-muted"></i>
                            </a>
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
    `);
}

export default PostItem;