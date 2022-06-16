
			
			const div = document.getElementById('con');
			const form1 = document.getElementById('fr');
			const form2 = document.getElementById('frm2');
			const removeBtn1 = document.getElementById('btn1');
			const removeBtn2 = document.getElementById('btn2');
			
  		btn1.onclick = function() {
    			
				document.getElementById('con').classList.add('movl');
				document.getElementById('fr').classList.add('frm');
				document.getElementById('frm2').classList.add('frm3');
	    	document.getElementById('hlo').style.opacity = 0;
	    	document.getElementById('btn1').style.opacity = 0;
	    	document.getElementById('btn2').style.opacity = 100;
	    	document.getElementById('btn2').type = 'button';

	    	removeBtn1.addEventListener('click',()=>{
    			div.classList.remove('movr');
    			form1.classList.remove('frm2');
    			form2.classList.remove('frm4');
				})
	    }

	    btn2.onclick = function() {

				document.getElementById('con').classList.add('movr');
				document.getElementById('fr').classList.add('frm2');
				document.getElementById('frm2').classList.add('frm4');
	    	document.getElementById('btn2').style.opacity = 0;
	    	document.getElementById('btn1').style.opacity = 100;
	    	document.getElementById('hlo').style.opacity = 100;

	    	removeBtn2.addEventListener('click',()=>{
    			div.classList.remove('movl');
    			form1.classList.remove('frm');
    			form2.classList.remove('frm3');
				})	    	
	    }

		
