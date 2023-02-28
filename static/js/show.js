$(function() {
    const search = $("#search")
    const searchButton = $("#search-button")
    searchButton.click((e)=>{
        e.preventDefault();
        let url = location.origin + "/user/find?email=" + search.val()
        console.log(url)
        location.href = url
    })
	
});