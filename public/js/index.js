const highlightActiveMenuItem = () => {
    const sections = document.querySelectorAll(".section")
    window.addEventListener("scroll", () => {
        let sy = window.scrollY

        sections.forEach((s) => {
            const sh = s.offsetHeight
            const st = s.getBoundingClientRect().top + sy - 100
            const sid = s.getAttribute("id")

            if (sy >= st && sy < st + sh) {
                document
                    .querySelector(`a[href="#${sid}"] div`)
                    .classList.add("active-menu")
            } else {
                document
                    .querySelector(`a[href="#${sid}"] div`)
                    .classList.remove("active-menu")
            }
        })
    })
}

if (window.location.pathname === "/") {
    highlightActiveMenuItem()
}
