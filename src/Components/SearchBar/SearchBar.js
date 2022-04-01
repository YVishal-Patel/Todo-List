import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
      <>
          <div className="container-fluid2">
              <div className="row">
                  <div className="col-5 col-md-5 col-sm-4 searchBar">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" search-icon search" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"  />
 </svg><input type="text" placeholder='search' />
                  </div>
                  <div className="col-5 col-md-5 col-sm-5 web-icon">
                      <p className='web-icons fs-3'>FLORA </p>
                      <p className='web-icoms-text'>THE FASHION BOUTIQUE</p>
                  </div>
                  <div className="col-1 col-md-1 col-sm-1 user-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg> <span className='text'> Sign Up </span>
                   </div>
                  <div className="col-1 col-md-1 col-sm-2 cart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class=" search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg> <span className='text'> Cart </span>
                  </div>
                  </div>
          </div>
      </>
  )
}

export default SearchBar

// import React from 'react'

// function SearchBar() {
//   return (
//       <>
//           <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//       </>
//   )
// }

// export default SearchBar