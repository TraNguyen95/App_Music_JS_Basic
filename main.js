
const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);
const heading = $1('header h2')
const cdThumb = $1('.cd-thumb')
const audio = $1('#audio')
const cd = $1('.cd')
const playBtn = $1('.btn-toggle-play')
const player = $1('.player')
const progress = $1('#progress')
const preBtn = $1('.btn-prev')
const nextBtn = $1('.btn-next')
const randomBtn = $1('.btn-random')
const repeatBtn = $1('.btn-repeat')
const PLAYER_STORAGE_KEY = 'TRA NGUYEN'


const app = {
	currentIndex: 0,
	isPlaying: false,
	isRandom: false,
	isRepeat: false,
	config:  JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
	songs: 
	[
	    {
	      name: "Tinh Ban Dieu Ky",
	      singer: "Amee + Ricky Star",
	      path: "mp3/TinhBanDieuKy.mp3",
	      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
	    },
	    {
	      name: "3107-2",
	      singer: "Duong + Naau",
	      path: "mp3/3107-2.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Cao Oc 20",
	      singer: "Bray",
	      path: "mp3/CaoOc20.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Nang Tho",
	      singer: "Hoang Dung",
	      path: "mp3/NangTho.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Tinh Ban Dieu Ky 2",
	      singer: "Amee + Ricky Star",
	      path: "mp3/TinhBanDieuKy.mp3",
	      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
	    },
	    {
	      name: "3107-2 2",
	      singer: "Duong + Naau",
	      path: "mp3/3107-2.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Cao Oc 20 2",
	      singer: "Bray",
	      path: "mp3/CaoOc20.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Nang Tho 2",
	      singer: "Hoang Dung",
	      path: "mp3/NangTho.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Tinh Ban Dieu Ky",
	      singer: "Amee + Ricky Star",
	      path: "mp3/TinhBanDieuKy.mp3",
	      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
	    },
	    {
	      name: "3107-2",
	      singer: "Duong + Naau",
	      path: "mp3/3107-2.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Cao Oc 20",
	      singer: "Bray",
	      path: "mp3/CaoOc20.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    },
	    {
	      name: "Nang Tho",
	      singer: "Hoang Dung",
	      path: "mp3/NangTho.mp3",
	      image:
	        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
	    }
  	],
  	setConfig: function(key,value) {
  		this.config[key] = value;
  		localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config) )
  	},
  	render: function () {
  		//this.render()
  		const htmls = this.songs.map((song,index) => {
  			return `<div class="song ${index === this.currentIndex ? 'active' : '' }" data-index="${index}">
				      <div class="thumb" style="background-image: url('${song.image}')">
				      </div>
				      <div class="body">
				        <h3 class="title">${song.name}</h3>
				        <p class="author">${song.singer}</p>
				      </div>
				      <div class="option">
				        <i class="fas fa-ellipsis-h"></i>
				      </div>
				    </div>`


  		})
  		$1('.playlist').innerHTML = htmls.join('');
  	},
  	defineProperties: function() {
  		Object.defineProperty(this,'currentSong', {
  			get: function() {
  				return this.songs[this.currentIndex]
  			}
  		})
  	},
  	handleEvent : function (){
  		
  		const cdWidth = cd.offsetWidth
  		document.onscroll = function () {
  			const scrollTop = window.scrollY 
  			const newCdWidth = cdWidth - scrollTop
  			//console.log(newWidth)
  			cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
  			cd.style.opacity = newCdWidth/cdWidth
  		}

  		const cdThumAnimate = cdThumb.animate(
  			[{ transform : 'rotate(360deg)' }],
  			{
  				duration: 10000,
  				interations: Infinity
  			}
  			)

  		playBtn.onclick = function() {
  			if(app.isPlaying){
  				audio.pause()
  			}else{
  				audio.play()
  			}
  		}
  		cdThumAnimate.pause()

  		audio.onplay = function() {
  			app.isPlaying = true
  			player.classList.add('playing')
  			cdThumAnimate.play()

  		}
  		audio.onpause = function() {
  			app.isPlaying = false
  			player.classList.remove('playing')
  			cdThumAnimate.pause()
  		}
  		audio.ontimeupdate = function() {
  			if(this.duration){
  				const progressPercent = Math.floor(this.currentTime/this.duration * 100) ;
  				progress.value = progressPercent
  			}
  		}
  		progress.onchange = function(e) {
  			const seekTime = audio.duration / 100 * e.target.value
  			audio.currentTime = seekTime
  		}
  		nextBtn.onclick = function() {
  			if(app.isRandom){
  				app.playRandomSong()
  			}else{
  				app.nextSong()
  			}
  			
  			audio.play()
  			app.render()
  			app.scrollToActiveSong()
  		}
  		preBtn.onclick = function() {
  			if(app.isRandom){
  				app.playRandomSong()
  			}else{
  				app.preSong()
  			}
  			
  			audio.play()
  			app.render()
  			app.scrollToActiveSong()
  		}
  		randomBtn.onclick = function() {
			app.isRandom = !app.isRandom
			app.setConfig('isRandom', app.isRandom)
  			randomBtn.classList.toggle('active',app.isRandom)

  		}
  		audio.onended = function() {
  			if(app.isRepeat){
  				audio.play()
  			}else{
  			    nextBtn.click()
  			}
  			
  		}
  		$1('.playlist').onclick = function(e) {
  			const songNode = e.target.closest('.song:not(.active)')
  			if((songNode) || e.target.closest('.option') ){
  				if(songNode){
  					app.currentIndex = Number(songNode.dataset.index) 
  					app.loadCurrenSong()
  					app.render()
  					audio.play()

  				}
  				if(e.target.closest('.option')){

  				}
  			}
  		}
  		repeatBtn.onclick = function() {
			app.isRepeat = !app.isRepeat
			app.setConfig('isRepeat', app.isRepeat)
			repeatBtn.classList.toggle('active',app.isRepeat)
  		}
  	},
  	loadCurrenSong: function() {
  		

  		heading.textContent = this.currentSong.name
  		cdThumb.style.background = `url('${this.currentSong.image}')` 
  		audio.src = this.currentSong.path

  		// console.log(heading,cdThumb,audio)
	  },
	loadConfig: function() {
		this.isRandom = this.config.isRandom
		this.isRepeat = this.config.isRepeat
	},
  	scrollToActiveSong: function() {
  		setTimeout(() => {
  			$1('.song.active').scrollIntoView({
  				behavior: 'smooth',
  				block: 'nearest'
  			})
  		},300)
  	},
  	nextSong: function() {
  		this.currentIndex ++
  		if(this.currentIndex >= this.songs.length){
  			this.currentIndex = 0
  		}
  		// console.log(this.currentIndex)
  		this.loadCurrenSong()
  	},
  	preSong: function() {
  		this.currentIndex --
  		if(this.currentIndex < 0){
  			this.currentIndex = this.songs.length - 1
  		}
  		this.loadCurrenSong()
  	},
  	randomSong: function(){
  		//this.currentIndex = 
  	},
  	playRandomSong: function() {
  		let newIndex
  		do{
  			newIndex = Math.floor(Math.random() * this.songs.length)
  		}while (newIndex === this.currentIndex)
  		this.currentIndex = newIndex
  		this.loadCurrenSong()
  	},
  	start: function () {
		this.loadConfig()
  	this.defineProperties()
		this.handleEvent()
		this.loadCurrenSong()
  	this.render()
		
		  
		repeatBtn.classList.toggle('active',app.isRepeat)
		randomBtn.classList.toggle('active',app.isRandom)
  	}
}

app.start();

