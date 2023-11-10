"use client";
const Homepage = () => {
  return (
    <>
      {/* // <!-- Navbar --> */}
      <nav class="bg-gray-900 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-2xl font-bold">SermDeveloper</div>
          <div>
            <a href="#" class="text-white bg-blue-500 px-4 py-2 rounded mr-2">
              Sign In
            </a>
            {/* <!-- Other navigation links here --> */}
          </div>
        </div>
      </nav>

      {/* // <!-- Hero Section --> */}
      <section class="bg-gray-800 text-white py-16">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Your Dashboard Solution</h1>
          <p class="text-lg">Manage, Analyze, and Scale seamlessly</p>
          {/* <!-- Call-to-action button --> */}
          <a href="#" class="bg-blue-500 text-white px-6 py-3 rounded mt-4">
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- Feature Sections --> */}

      <section class="bg-gray-900 text-white py-12">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">
            Managing Users, Admins, and Clients
          </h2>
          <p>Details and visuals about this feature...</p>
          {/* <!-- Visuals, data, or infographics here --> */}
          <a href="#" class="block text-blue-500 mt-4">
            Sign In to Explore
          </a>
        </div>
      </section>

      {/* <!-- Call-to-Action Sections --> */}
      {/* <!-- Similar structure as feature sections with call-to-action for signing in --> */}

      {/* <!-- Footer --> */}
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
          <div>Additional Links</div>
          <div>Social Media Icons</div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
