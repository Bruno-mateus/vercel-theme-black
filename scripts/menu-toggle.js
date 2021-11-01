const nav = document.querySelector('.middle')

const closeNav = document.querySelector('.close')

const showNav = document.querySelector('.menu-toggle')

const toggleNav = {
  execute() {
    showNav.addEventListener('click', () => {
      this.show()
    })

    closeNav.addEventListener('click', () => {
      this.close()
    })
  },
  show() {
    nav.classList.add('show')
    document.querySelector('body').style.overflow = 'hidden'
    closeNav.style.display = 'flex'
  },
  close() {
    nav.classList.remove('show')
    document.querySelector('body').style.overflow = 'scroll'
    closeNav.style.display = 'none'
  }
}

toggleNav.execute()
