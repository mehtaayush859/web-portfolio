
import AnimatedSection from './AnimatedSection';
import ProjectCard, { ProjectProps } from './ProjectCard';

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment processing using Stripe.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team assignments, and progress tracking functionality.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A comprehensive fitness tracking application that allows users to log workouts, track nutrition, and visualize progress through interactive charts.",
      image: "https://images.unsplash.com/photo-1669553389028-f16a367e05b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000",
      tags: ["React Native", "MongoDB", "Node.js", "Chart.js"],
      github: "https://github.com",
    },
    {
      title: "Real Estate Marketplace",
      description: "A property listing platform with advanced search, filtering, and mapping features. Includes user profiles, saved properties, and inquiry management.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000",
      tags: ["React", "MongoDB", "Express", "Google Maps API"],
      github: "https://github.com",
      demo: "https://example.com"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Featured Projects
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work, showcasing my expertise in building 
            full-stack applications with React, Node.js, and MongoDB.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="scale-in" delay={100 * index}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View more projects on GitHub <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-px"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
