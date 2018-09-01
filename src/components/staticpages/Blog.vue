<template>
    <div>
        <hero-section></hero-section>
        <div class="section-about-us">
		   <div class="container-content w-container">
		      <div class="content-row w-row">
		         <div class="col-1 w-col w-col-5">
		            <div class="text-intro">Rent a car<br>and Save More!</div>
		            <p class="paragraph-intro">Renting a car can be more beneficial than driving your own. You may never know when you will be needing a vehicle for an unexpected situation. <br><br>There will come a time that you will be on trips, family vacations, or to have an extra to use when your own car is under repair. <br><br>Some apparent reason to <strong>rent a car</strong> is really something to consider. Find out more about this by tuning in to our blogs!<br></p>
		         </div>
		         <div class="col-2 blog-section w-col w-col-7">
		            <h2 class="page-title">Latest news &amp; promos</h2>
		            <a href="#" class="blog-item w-inline-block w-clearfix">
		               <img src="images/holiday-promo.jpg" width="227" srcset="images/holiday-promo-p-500.jpeg 500w, images/holiday-promo.jpg 700w" sizes="(max-width: 479px) 96vw, (max-width: 767px) 37vw, (max-width: 991px) 44vw, 200px" class="blog-item-image">
		               <h3 class="blog-item-title"><strong class="bold-text">Hire a Car for Your Next Philippines Holiday with Anis Transport</strong></h3>
		               <p class="blog-item-excerpt">If you are heading to a holiday destination in Manila, Philippines or going on a business trip<br></p>
		            </a>
		            <a href="#" class="blog-item w-inline-block w-clearfix">
		               <img src="images/amazing-baguio.jpg" srcset="images/amazing-baguio-p-500.jpeg 500w, images/amazing-baguio.jpg 700w" sizes="(max-width: 479px) 96vw, (max-width: 767px) 37vw, (max-width: 991px) 44vw, 200px" class="blog-item-image">
		               <h3 class="blog-item-title"><strong>The Amazing Baguio</strong></h3>
		               <p class="blog-item-excerpt">The hot season in full swing and we are all looking for a cool and pleasant place we can escape to. Instead hang out at the mall again, we offer you our services . . .<br></p>
		            </a>
		         </div>
		      </div>
		   </div>
		</div>
	</div>
    </div>
</template>

<script>
import heroSection from '../widgets/Hero';


export default {
  components: { heroSection },
  data: () => ({}),
  methods: {},
}

</script>
