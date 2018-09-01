<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="w-container">
    	<a :href="'#/'" class="brand w-nav-brand w--current"><img src="logo" class="image-logo"></a>
    	<nav role="navigation" class="nav-menu w-nav-menu" style="transform: translateY(0px) translateX(0px);">
	    	<a :href="'#/our-cars'" class="nav-item w-nav-link" style="max-width: 728px;">our cars</a>
	    	<a :href="'#/prices'" class="nav-item w-nav-link" style="max-width: 728px;">prices</a>
	    	<a :href="'#/about-us'" class="nav-item w-nav-link" style="max-width: 728px;">About us</a>
	    	<a :href="'#/blog'" class="nav-item w-nav-link" style="max-width: 728px;">blog</a>
	    	<a :href="'#/contact-us'" class="nav-item w-nav-link" style="max-width: 728px;">contact us</a>
    	</nav>
      
      <div class="menu-button w-nav-button">
        <div class="icon w-icon-nav-menu"></div>
      </div>
    </div>
  <div class="w-nav-overlay" data-wf-ignore="" style="display: none;"></div></div>
</template>

