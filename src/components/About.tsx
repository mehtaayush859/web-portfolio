
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            My Journey as a Developer
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-up" className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate software engineer specializing in full-stack development with a focus 
                on creating intuitive and performant web applications. With a strong foundation in 
                computer science and years of practical experience, I love tackling complex problems
                and turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed">
                My journey began with a fascination for how technology can transform lives. Today, I'm 
                dedicated to crafting digital solutions that not only meet technical requirements but 
                also provide exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through mentoring and technical articles.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200} className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Technical Skills</h4>
                    <p className="text-muted-foreground">
                      Proficient in modern web technologies and practices, with expertise in 
                      React.js, Node.js, and MongoDB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Professional Experience</h4>
                    <p className="text-muted-foreground">
                      Worked with diverse teams to deliver scalable applications for various 
                      industries, from startups to enterprise clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Education</h4>
                    <p className="text-muted-foreground">
                      Bachelor's degree in Computer Science with additional certifications 
                      in web development and cloud technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Passion</h4>
                    <p className="text-muted-foreground">
                      Dedicated to continuous learning and creating accessible, 
                      user-centered applications that make a positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
