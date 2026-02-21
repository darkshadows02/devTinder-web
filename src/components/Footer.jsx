import React from 'react'

const Footer = () => {
  return (
    <div> 
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Suraj – All rights reserved. Developed by Suraj, Software Engineer.</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer