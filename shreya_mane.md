---
layout: home
---
<style>

    /* Full-width carousel */
    .carousel-container {
        position: relative;
        width: 80vw; /* Take up the most viewport width */
        height: auto;
        margin: 2rem 0;
        overflow: hidden;
        left: 50%; 
        right: 50%;
        transform: translateX(-50%); /* Make sure it's centered */
    }
    
    .carousel-track {
        display: flex;
        transition: transform 0.5s ease;
        width: 100%; /* Make the carousel fill the width */
    }

    .carousel-slide {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel-slide img {
        width: 100vw; /* Make the images span the full width of the viewport */
        height: auto; /* Keep the aspect ratio */
        object-fit: cover; /* Cover the space properly */
    }

    /* Carousel Buttons */
    .carousel-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 10;
    }

    .carousel-button.prev {
        left: 1rem;
    }

    .carousel-button.next {
        right: 1rem;
    }

    /* Carousel Indicators */
    .carousel-indicators {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
    }

    .indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }

    .indicator.active {
        background-color: white;
    }

    /* Carousel Caption */
    .carousel-caption {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        max-width: 80%;
        text-align: center;
    }
</style>


# Shreya Mane

## Introduction
When it comes to designing a home, every detail—from furniture choices to wall treatments—plays a role in creating a space that reflects personal style and comfort. In this post, we explore two distinct interior design concepts: **The Modern** and **The Classical**. Each design offers a unique approach, whether you lean toward crisp lines and a cool color palette or a warm, traditional aesthetic steeped in cultural elements.

<img src="{{ '/assets/shreya_mane/1.png' | relative_url }}" alt="Shreya Mane">


<br>
---
<br>

## Design 1: The Modern

### Introduction
In this design, sleek, crisp lines and a cool pastel color palette define a contemporary aesthetic, offering a chic and refreshing living experience. The emphasis is on minimalism, with functionality and understated elegance taking center stage. The use of frosted glass, clean vertical elements, and modern furnishings brings a cohesive and polished look to the space.

<img src="{{ '/assets/shreya_mane/2.png' | relative_url }}" alt="Shreya Mane Modern">

The design includes both functional and decorative elements such as modern furniture, floor lamps, wall art, and plants. The color palette is primarily teak brown, grey, green, and beige, maintaining a cool and balanced ambiance throughout the house.

### Foyer:

<div id="carousel1" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/3.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/4.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/5.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/6.png"}
]'></div>

- *Half-height frosted glass with a ledge (Option 1)*  
- *Full-height frosted glass with a ledge (Option 2)*  

### Living Room:

<div id="carousel1" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/7.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/8.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/9.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/10.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/11.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/12.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/13.png"}
]'></div>

- *End-to-end full-height curtains for an elegant and expansive look.*
- *Colorful square carpet with a center table adds a touch of vibrance.*
- *A large painting serves as a focal point on the end wall.*
- *Existing sofas enhanced by the addition of a swing seat and two new puffs.*
- *Window with Roman blinds brings in natural light while maintaining privacy.*

### Dining Area:

<div id="carousel1" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/14.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/15.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/16.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/17.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/18.png"}
]'></div>

- *Round six-seater marble top table adds sophistication.*
- *Crockery unit and wall art provide options for functional yet decorative storage.*
- *Roman blinds match the living room aesthetic, creating continuity between the spaces.*
- *Frosted glass partition extends from the foyer, keeping the design cohesive.*

<br>
---
<br>

## Design 2: The Classical

### Introduction
This design exudes warmth and a traditional Indian aesthetic. Featuring a mix of warm pastel colors, traditional wooden furniture, and rich textures, the space is imbued with a sense of coziness and timeless elegance. Elements like brass light fixtures, traditional carpets, and ornate wall art create a homely yet grand vibe.

<img src="{{ '/assets/shreya_mane/19.png' | relative_url }}" alt="Shreya Mane Modern">

The classical design focuses on comfort, warmth, and cultural richness, with a color palette including teak brown, beige, red, and mauve. The decor leans heavily on traditional craftsmanship and intricate details.

### Foyer:

<div id="carousel2" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/20.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/21.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/22.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/23.png"}
]'></div>

- *Brick wall with a traditional mirror and console (Option 1)*  
- *Traditional columns with Ganesha wall art (Option 2)*  

### Living Room:

<div id="carousel2" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/24.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/25.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/26.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/27.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/28.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/29.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/30.png"}
]'></div>

- *Full-height curtains soften the ambiance and offer privacy.*
- *Traditional square carpet and center table ground the space in a cultural aesthetic.*
- *Display shelves and plants on the end wall create a calm and balanced composition.*
- *Existing furniture complemented by two additional chairs and tables.*
- *Window with Roman blinds and an existing diwan for a relaxing nook.*

### Dining Area:

<div id="carousel2" class="carousel-container" data-slides='[
    {"image": "{{ site.baseurl }}/assets/shreya_mane/31.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/32.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/33.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/34.png"},
    {"image": "{{ site.baseurl }}/assets/shreya_mane/35.png"}
]'></div>

- *Square six-seater marble top table with a built-in bench for four and two chairs for added seating options.*
- *Partition with traditional Indian columns connecting the foyer and dining, reinforcing the classical style.*
- *Roman blinds in the dining room mirror those in the living room, tying the spaces together.*
- *Crockery unit and wall art for both practicality and beauty on the kitchen wall.*

<br>
---
<br>


## Conclusion
Both **The Modern** and **The Classical** design styles offer a unique blend of aesthetics and functionality, allowing you to tailor your living space to reflect your personality. Whether you prefer the sleek, minimal elegance of modern design or the warmth and tradition of classical interiors, each approach brings its own charm to the table. By thoughtfully combining colors, textures, and decor, these designs transform any home into a sanctuary that not only looks beautiful but also feels comfortable and inviting.

<img src="{{ '/assets/shreya_mane/36.png' | relative_url }}" alt="Shreya Mane Fin">

Ultimately, the right design is one that resonates with you—creating a space that is truly *yours*.






<script>
    class Carousel {
        constructor(element) {
            this.container = element;
            this.slides = JSON.parse(this.container.dataset.slides);
            this.currentSlide = 0;

            this.render();
            this.setupEventListeners();
        }

        render() {
            this.container.innerHTML = `
                <div class="carousel-track">
                    ${this.slides.map(slide => `
                        <div class="carousel-slide">
                            <img src="${slide.image}" alt="${slide.caption}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-button prev">&lt;</button>
                <button class="carousel-button next">&gt;</button>
                <div class="carousel-indicators">
                    ${this.slides.map((_, index) => `
                        <div class="indicator${index === 0 ? ' active' : ''}"></div>
                    `).join('')}
                </div>
                <!--
                <div class="carousel-caption">${this.slides[0].caption}</div>
                -->
            `;

            this.track = this.container.querySelector('.carousel-track');
            this.indicators = this.container.querySelectorAll('.indicator');
            // this.caption = this.container.querySelector('.carousel-caption');
        }

        setupEventListeners() {
            this.container.querySelector('.prev').addEventListener('click', () => this.prevSlide());
            this.container.querySelector('.next').addEventListener('click', () => this.nextSlide());
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
        }

        updateCarousel() {
            this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
            this.indicators.forEach((ind, index) => {
                ind.classList.toggle('active', index === this.currentSlide);
            });
            this.caption.textContent = this.slides[this.currentSlide].caption;
        }

        goToSlide(index) {
            this.currentSlide = index;
            this.updateCarousel();
        }

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.updateCarousel();
        }

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.updateCarousel();
        }
    }

    // Initialize all carousels on the page
    document.querySelectorAll('.carousel-container').forEach(carousel => new Carousel(carousel));
</script>
