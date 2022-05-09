<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="pokibar" href="#">Poki Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="./about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<styles lang="scss" scoped>
$theme-colors: #EDD2E0;

.pokibar {
    color: $theme-colors;
}
</styles>