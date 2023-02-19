

function NavigationSidebar(highlight = 'Home') {
    const sections = [
        {label:'Home', href:'../HomeScreen/index.html', iconClass:'fa-solid fa-house'},
        {label:'Explore', href:'../ExploreScreen/index.html', iconClass:'fa-solid fa-hashtag'},
        {label:'Notification', href:'#', iconClass:'fa-solid fa-bell'},
        {label:'Messages', href:'#', iconClass:'fa-solid fa-envelope'},
        {label:'Bookmarks', href:'#', iconClass:'fa-solid fa-bookmark'},
        {label:'Lists', href:'#', iconClass:'fa-solid fa-list'},
        {label:'Profile', href:'#', iconClass:'fa-solid fa-user'},
        {label:'More', href:'#', iconClass:'fa-solid fa-angles-right'},
    ]

    return (`
        <div class="list-group mb-2">
            <a class="list-group-item" href="/tuiter-react-web-app/public">
                <i class="fa-solid fa-t"></i></a>
            </a>
            ${
                sections.map(section =>
                    `
                    <a href="${section.href}" class="list-group-item ${section.label === highlight ? 'active' : ''}" id="${section.label}">
                        <div class="row">
                            <div class="col-1">
                                <i class="${section.iconClass}"></i>
                            </div>
                            <div class="col-6">
                                <p for="${section.label}" class="mb-0 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">${section.label}</p>
                            </div>
                        </div>
                    </a>
                    `
                ).join('')
            }
        </div>
        <div class="rounded-pill btn-primary btn col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">Tuit</div>

    `);
}
export default NavigationSidebar;