<header>
        <!-- my navigation bar header to nav between pages -->
        <nav>
            <a href="index.php">Home</a>
            <a href="about.php">About</a>
            <a href="search.php">Search</a>
            <div class="dropdownbar">
                <a class="dropbtn">USER</a>
                <div class="dropdown-content">
                    <a href="login.php">Login</a>
                    <a href="registration.php">Signup</a>
                </div>
            </div>
        </nav>
        <!-- created a container to better control and position my header content including icons and text title -->
        <div class="header-container">
            <picture>
                <source media="(min-width: 650px)" srcset="images\logo.png" class="profile-img">
                <img src="images\logo.png" alt="logo" class="profile-img floater">
            </picture>
            <h2 id="header-content">Welcome To John Lee's Toronto Landmarks</h2>
            <picture>
                <source media="(min-width: 650px)" srcset="images\logo.png" class="profile-img">
                <img src="images\logo.png" alt="logo" class="profile-img">
            </picture>
        </div>
    </header>