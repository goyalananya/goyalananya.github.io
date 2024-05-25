---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<h1 style="font-size: 3rem">Welcome to Ananya's Space</h1>

<!-- Start of the business card container -->
<div id="business-card-container">
    <div class="card-container">
        <div class="card">
            <div class="card-face front">
                <img src="{{ '/assets/images/UnoCard-1.png' | relative_url }}" alt="Front Side">
            </div>
            <div class="card-face back">
                <img src="{{ '/assets/images/UnoCard-2.png' | relative_url }}" alt="Back Side">
            </div>
        </div>
    </div>
</div>
<!-- End of the business card container -->


Hello, I'm **Ananya Goyal**, an architect with six years of experience in the dynamic field of architecture. My journey in architecture has been fueled by a deep passion for design and a commitment to creating functional, aesthetically pleasing spaces. 

## Professional Experience

Over the past six years, I have honed my skills and expertise through diverse projects, ranging from industrial complexes to residential and commercial buildings. My portfolio includes:

- **Industrial Projects**: Designing large-scale manufacturing facilities, warehouses, and distribution centers. These projects have strengthened my ability to balance functionality, safety, and efficiency with innovative design.
  
- **Residential Projects**: Creating custom home designs that reflect the unique lifestyles and preferences of clients, ensuring comfort and elegance.
  
- **Commercial Projects**: Developing office buildings, retail spaces, and mixed-use developments, emphasizing both practicality and visual appeal.

## Skills and Expertise

I am proficient in a variety of architectural tools and software, which allows me to bring my designs to life with precision and clarity. My key skills include:

- **Revit**: Expertise in creating detailed 3D models, allowing for comprehensive visualization and collaboration throughout the design and construction process.
  
- **AutoCAD**: Proficient in drafting and detailing, ensuring accurate and high-quality construction documents.

## Personal Interests

Outside of my professional work, I have a keen interest in Origami and Kirigami. These intricate art forms have taught me the importance of patience, precision, and creativity—qualities that I bring to my architectural practice. Both Origami and Kirigami not only inspire my designs but also enhance my problem-solving abilities and attention to detail.


<style>
    #business-card-container {
        display: flex;
        justify-content: center;
        align-items: top;
        height: fit-content;
    }

    #business-card-container .card-container {
        perspective: 1000px;
    }

    #business-card-container .card {
        width: 300px;
        height: 545px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;
        align: top;
    }

    #business-card-container .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    #business-card-container .front {
        transform: rotateY(0deg);
    }

    #business-card-container .back {
        transform: rotateY(180deg);
    }
</style>

<script>
    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const card = document.querySelector('#business-card-container .card');

        // Calculate the rotation angle based on scroll position
        const maxScroll = document.body.scrollHeight - windowHeight;
        const rotation = (scrollPosition / maxScroll) * 3600;

        // Ensure the rotation does not exceed 180 degrees
        if (rotation > 180) {
            rotation = 180;
        }

        // Apply the rotation to the card
        card.style.transform = `rotateY(${rotation}deg)`;
    });
</script>