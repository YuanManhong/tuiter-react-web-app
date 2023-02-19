const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item ps-2 pe-0">
            <div class="d-flex justify-content-between">
                <img src="../../images/${who.avatarIcon}"
                                     class="rounded-circle"
                                 width="40px" height="40px"/>
                <div class="fw-bold flex-fill ps-2">
                    ${who.userName}
                    <i class="fa-solid fa-circle-check"></i></br>
                    <small class="fw-normal">@${who.handle}</small>
                </div>
                <div class="p-2">
                    <button class="btn btn-primary float-end rounded-pill">Follow</button>
                </div>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;
