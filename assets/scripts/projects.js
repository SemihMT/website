// projects.js
fetch("./assets/scripts/projects.json")
    .then(response => response.json())
    .then(projects => {
        const projectGrid = document.getElementById('project-grid');
        
        const tagColors = {
            'C': '#486389',
            'Python': '#ccb043',
            'C++': '#6488bc',
            'School': '#154c79',
            'Group': '#454545',
            'C#': '#4285f4',
            'Vulkan': '#ac162c',
            'DX11': '#7eba15',
            'UE5': '#b96d26',
            'CMake':'#78a3e2'

        };

        projects.forEach(project => {
            // Create project div
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.style.cursor = 'pointer';
            projectDiv.onclick = () => location.href = project.link;

            // if (project.priority) {
            //     const priority = project.priority.trim();
            //     if (priority.toLowerCase() === 'normal') {
            //         projectDiv.classList.add('priority-normal');
            //     } else if (priority.toLowerCase() === 'high') {
            //         projectDiv.classList.add('priority-high');
            //     }
            // }
            // Add image or video
            if (project.videoSrc) {
                const video = document.createElement('video');
                video.preload = "none";
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                const source = document.createElement('source');
                source.src = project.videoSrc;
                source.type = "video/webm";
                video.appendChild(source);
                projectDiv.appendChild(video);
            } else if (project.imageSrc) {
                const img = document.createElement('img');
                img.src = project.imageSrc;
                img.alt = `Screenshot of ${project.title}`;
                projectDiv.appendChild(img);
            }

            // Add project info
            const infoDiv = document.createElement('div');
            infoDiv.className = 'project-info';

            // Add title
            const title = document.createElement('h3');
            title.textContent = project.title;
            infoDiv.appendChild(title);

            // Add tags
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'tags';
            project.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'tag';
                tagSpan.textContent = tag;
                
                if (tagColors[tag]) {
                    tagSpan.style.backgroundColor = tagColors[tag];
                } else {
                    tagSpan.style.backgroundColor = '#454545';
                }

                tagsDiv.appendChild(tagSpan);
            });
            infoDiv.appendChild(tagsDiv);

            // Add description
            const description = document.createElement('p');
            description.textContent = project.description;
            infoDiv.appendChild(description);

            projectDiv.appendChild(infoDiv);
            projectGrid.appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error loading projects:', error));