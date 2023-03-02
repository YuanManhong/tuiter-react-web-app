import React from "react";

const PostItem = ({post}) => {
    return (
        <div className="container border-top pb-3 pt-3 border-start border-end">
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid float-start rounded-circle" src={`/images/${post.userIcon}`}/>
                </div>
                <div className="col-10">
                    {post.famous ? <div className="text-secondary small"><i className="bi bi-arrow-repeat text-secondary"></i> {post.famous}</div>: ''}
                    <div className="row">
                        <div className="col-11">
                            <div className="fw-bold">
                                {post.userName} <small> </small>
                                <i className="bi bi-check-circle-fill text-primary"></i>
                                <small className="text-muted fw-normal"> @{post.handle} · {post.timeHour}</small>
                            </div>
                        </div>
                        <div className="col-1">
                            <a className="text-decoration-none fw-bold text-secondary" href="#">...</a>
                        </div>
                    </div>
                    <div>
                        <p>{post.message}-> <a href="" className="text-decoration-none">{post.annotation}</a></p>
                    </div>
                    <div className="border rounded-3  mt-2 mb-3">
                        <img className={`img-fluid border-bottom border-light ${post.contentTitle && post.content ? 'rounded-top' : 'rounded'}`} src={`/images/${post.image}`}/>

                        {post.contentTitle ? <div className="ps-3 pe-3 pt-2">{post.contentTitle}</div>: ''}

                        {post.content ? <div className="ps-3 pe-3  two-line-truncate text-muted">{post.content}</div>: ''}

                        {post.link ? <a href="#" className="ps-3 pe-3 mb-2 two-line-truncate text-muted text-decoration-none"><i className="bi bi-link-45deg text-secondary"></i>{post.link}</a> : ''}
                    </div>
                    <div className="row pe-3">
                        <div className="col-3">
                            <a className="text-decoration-none row" href="#">
                                <i className="col-4 pe-0 bi bi-chat text-muted"></i>
                                <p className="col-5 ps-0 text-muted">{post.talk}</p>
                            </a>
                        </div>
                        <div className="col-3">
                           <a className="text-decoration-none row" href="#">
                            <i className="col-4 pe-0 bi bi-arrow-repeat text-muted"></i>
                            <p className="col-5 ps-0 text-muted">{post.repost}</p>
                        </a>
                    </div>
                    <div className="col-3">
                        <a className="text-decoration-none row" href="#">
                                <i className="col-4 pe-0 bi bi-heart text-muted"></i>
                                <p className="col-5 ps-0 text-muted">{post.like}</p>
                            </a>
                        </div>
                        <div className="col-3">
                            <a className="text-decoration-none row" href="#">
                                <i className="col-4 pe-0 bi bi-upload text-muted"></i>
                            </a>
                    </div>
                        {post.thread ? <a href="" className="text-decoration-none">{post.thread}</a>: ''}
            </div>
        </div>
</div>
</div>

    );
};
export default PostItem;