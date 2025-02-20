const Navbar = () => {
    return (
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Image & Video Processing</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-500">Home</a>
            <a href="#" className="hover:text-purple-500">About</a>
            <a href="#" className="hover:text-purple-500">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;