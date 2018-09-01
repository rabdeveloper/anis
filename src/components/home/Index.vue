<template>
  <div>
   <hero-section></hero-section>
   <div class="car-groups">
      <div class="container-car-groups space-top w-container">

         <a :key="index" v-for="(item, index) in items" href="http://www.scribblez.co/anis/booking-step-1-1.html" class="car-groups-item w-inline-block">
            <div class="car-group-title">{{ item.gtitle }}</div>
            <div class="car-group-variant">{{ item.variant }}</div>
            <img :src="item.image" class="image-car-group">
            <div class="car-group-price-daily">From <strong class="price-daily">{{ item.currency }}{{ item.price }}</strong> / {{ item.daily }}</div>
            <div class="btn-get-quote">Get A Quote</div>
         </a>

        
      </div>
      <div class="container-ads w-container"><img src="images/ads.png" srcset="images/ads-p-500.png 500w, images/ads.png 1110w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" class="image-ad"></div>
   </div>
</div>
</template>

<script>
import heroSection from '../widgets/Hero';


export default {
  	components: { heroSection },
  	data() {
  		return {
	  		items: []
        }

  	},
  	mounted() {
	    const self = this;
	    self.loadCars(()=>{});
	    
	    console.log(items);

	},
	watch: {
	    'pagination.page':function(){
	        this.loadCars(()=>{});
	    },
	    'pagination.rowsPerPage':function(){
	        this.loadCars(()=>{});
	    },
	    
	    
	
	},
  	methods: {
	  	loadCars(cb) {
	        const self = this;
	        let params = {
	            
	        };
	        self.items = [
	        	{gtitle:'Group A', variant: 'Toyota Wigo' , price: '800', daily: 'Day', image: '~assets/images/wigo.png', currency: '₱'},
	  			{gtitle:'Group B', variant: 'Toyota Vios MT' , price: '950', daily: 'Day', image: '~ssets/images/vios-manual.png', currency: '₱'},
	  			{gtitle:'Group C', variant: 'Toyota Vios AT' , price: '1050', daily: 'Day', image: 'assets/images/vios-matic.png', currency: '₱'},
	  			{gtitle:'Group D', variant: 'Toyota Innova MT' , price: '1350', daily: 'Day', image: 'assets/images/innova-manual.png', currency: '₱'},
	  			{gtitle:'Group E', variant: 'Toyota Innova AT' , price: '1450', daily: 'Day', image: 'assets/images/innova-matic.png', currency: '₱'},
	  			{gtitle:'Group F', variant: 'Toyota Hi-Ace' , price: '2250', daily: 'Day', image: 'assets/images/hi-ace.png', currency: '₱'},
	  			{gtitle:'Group G', variant: 'Toyota Fortuner AT' , price: '2240', daily: 'Day', image: 'assets/images/fortuner.png', currency: '₱'},
	  			
	        ];
           
            (cb || Function)();
    },
  	},
}

</script>