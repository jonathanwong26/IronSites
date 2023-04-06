const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APwXEdf-tnqatKoZIqDnwA_MN-0WqilcOQ%3A1680801243019&source=hp&ei=2v0uZJzcO53NkPIPx_WpyAc&iflsig=AOEireoAAAAAZC8L6wLhXxDF5hlDXgX2V4wLv6RH63Za&ved=0ahUKEwicsZrI4JX-AhWdJkQIHcd6CnkQ4dUDCAk&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyFAguEIoFELEDEJECEIsDEJgDEKgDMgsIABCKBRCRAhCLAzIXCC4QgAQQsQMQxwEQ0QMQiwMQqAMQ0gMyDQgAEIAEEBQQhwIQiwMyFAguENQCELEDEIAEEIsDEJgDEKgDMg4ILhCABBCLAxCoAxCYAzIOCAAQgAQQsQMQgwEQiwMyEQguEIAEELEDEIsDEKMDEKgDMgsIABCABBCxAxCLAzoHCCMQ6gIQJzoHCC4QigUQQzoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6DQguEIoFEMcBENEDEEM6DQgAEIAEELEDEIMBEAo6CwguEIoFELEDEIMBOgoILhCKBRCxAxBDOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQsQMQ1AI6BQguEIAEUNkFWNcKYJgMaAFwAHgAgAFliAG2A5IBAzQuMZgBAKABAbABCrgBAQ&sclient=gws-wiz"
}
