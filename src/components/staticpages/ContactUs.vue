<template>
    <div>
        <hero-section></hero-section>
        <div class="section-contact-us">
		   <div class="container-content w-container">
		      <div class="contact-row w-row">
		         <div class="c-col-1 w-col w-col-5">
		            <div class="text-intro">Don’t Hesitate to contact with us for any kind of information </div>
		            <h4 class="page-title-sub">Our Numbers</h4>
		            <div class="contact-numbers w-clearfix"><span class="number-title">Office:</span> 02-5198186<br><span class="number-title">Globe:</span> 0917-774-5448<br><span class="number-title">Smart:</span> 0921-600-5318<br><span class="number-title">Smart:</span> 0998-567-0604<br><span class="number-title">Corporate:</span> 0977-841-2234</div>
		            <h4 class="page-title-sub">Working Hours</h4>
		            <div class="office-hours w-clearfix"><span class="span-work-hours">Monday to Friday: </span>8am – 8pm<br><span class="span-work-hours">Saturday &amp; Sunday:</span> 8am – 5pm</div>
		         </div>
		         <div class="c-col-2 w-col w-col-7">
		            <h2 class="page-title">Send us a Message</h2>
		            <div class="contact-form w-form">
		               <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="contact-form w-clearfix"><input type="text" class="contact-text w-input" maxlength="256" name="contact-name" data-name="contact-name" placeholder="Full Name" id="contact-name" required=""><input type="email" class="contact-text contact-col-1 w-input" maxlength="256" name="contact-email" data-name="contact-email" placeholder="Email Address" id="contact-email" required=""><input type="text" class="contact-text contact-col-2 w-input" maxlength="256" name="contact-number" data-name="contact-number" placeholder="Phone Number" id="contact-number-2" required=""><input type="text" class="contact-text w-input" maxlength="256" name="contact-suject" data-name="contact-suject" placeholder="Subject" id="contact-suject" required=""><textarea id="contact-message" name="contact-message" placeholder="Enter you message here" maxlength="5000" data-name="contact-message" required="" class="contact-text w-input"></textarea><input type="submit" value="Send Message" data-wait="Please wait..." class="btn-submit w-button"></form>
		               <div class="w-form-done">
		                  <div>Thank you! Your submission has been received!</div>
		               </div>
		               <div class="w-form-fail">
		                  <div>Oops! Something went wrong while submitting the form.</div>
		               </div>
		            </div>
		         </div>
		      </div>
		   </div>
		   <div class="location-map-container w-embed w-iframe"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.7835199387861!2d121.04229487456126!3d14.569708056654761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c851ca97e03f%3A0xe98ff63bbdd51a06!2sAnis+Transport!5e0!3m2!1sen!2sph!4v1535050425962" width="100%" height="495" frameborder="0" style="border:0" allowfullscreen=""></iframe></div>
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
