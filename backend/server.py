"""
Mara Ellison Portfolio - FastAPI Backend Server
Provides endpoints for profile, projects, experience, testimonials, and contact message persistence.
"""

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="Manas Maydeo Portfolio API",
    description="Backend services for Manas Maydeo - Product Designer & Frontend Engineer Portfolio",
    version="1.0.0",
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------------------------------------------------
# Data Models
# -----------------------------------------------------------------------------

class StatFigure(BaseModel):
    value: str
    label: str

class ImagePair(BaseModel):
    url: str
    caption: str

class Project(BaseModel):
    slug: str
    title: str
    client: str
    year: str
    role: str
    summary: str
    featured: bool = True
    heroImage: str
    thumbnail: str
    brief: str
    approach: str
    decisions: str
    outcome: str
    pullQuote: str
    stats: List[StatFigure] = []
    imagePairs: List[ImagePair] = []

class ProfileSocials(BaseModel):
    github: str
    linkedin: str
    readcv: str

class Profile(BaseModel):
    name: str
    eyebrow: str
    headline: str
    bio: List[str]
    availability: str
    location: str
    timezone: str
    email: str
    socials: ProfileSocials
    skills: Dict[str, List[str]]

class ExperienceItem(BaseModel):
    id: str
    role: str
    company: str
    period: str
    scope: str

class TestimonialItem(BaseModel):
    id: str
    quote: str
    author: str
    title: str
    company: str

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=2, max_length=100)
    message: str = Field(..., min_length=10, max_length=3000)

class ContactMessage(ContactMessageCreate):
    id: int
    createdAt: str

# -----------------------------------------------------------------------------
# Seed Data Store
# -----------------------------------------------------------------------------

PROFILE_DATA: Profile = Profile(
    name="Manas Maydeo",
    eyebrow="Full Stack Developer & Software Engineer — India",
    headline="Clean code that ships, architectures that hold.",
    bio=[
        "Computer Science graduate from Mumbai University with a strong foundation in Full Stack Web Development, modern JavaScript, React, Node.js, and Python.",
        "Based in Raigad, Maharashtra, India. Dedicated to building responsive, accessible, high-performance web applications and solving real-world engineering problems."
    ],
    availability="Open to Full Stack Developer & Software Engineer opportunities.",
    location="Raigad, Maharashtra, India",
    timezone="Asia/Kolkata",
    email="Manas12maydeo@gmail.com",
    socials=ProfileSocials(
        github="https://github.com/manasmaydeo8?tab=repositories",
        linkedin="https://www.linkedin.com/in/manas-maydeo-93ba49403/",
        readcv="https://github.com/manasmaydeo8"
    ),
    skills={
        "Languages & Backend": [
            "JavaScript (ES6+)",
            "Python",
            "Node.js & Express.js",
            "Java & Kotlin",
            "FastAPI / REST APIs",
            "SQL & NoSQL"
        ],
        "Frontend & UI": [
            "React.js & Hooks",
            "HTML5 & Semantic Web",
            "CSS3 & Responsive Design",
            "Bootstrap & Tailwind",
            "Component Architecture",
            "WCAG 2.1 Accessibility"
        ],
        "Databases & Tools": [
            "MongoDB & MySQL",
            "Git & GitHub Version Control",
            "Docker & Containerization",
            "Postman API Testing",
            "Linux Systems & CLI",
            "VS Code & Android Studio"
        ]
    }
)

PROJECTS_DATA: List[Project] = [
    Project(
        slug="kinetic-design-system",
        title="Kinetic Design System",
        client="Kinetic Labs",
        year="2024",
        role="Lead Systems Designer & Frontend Engineer",
        summary="A multi-brand tokenized design system powering 14 production web apps with zero runtime CSS overhead.",
        featured=True,
        heroImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        thumbnail="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
        brief="Kinetic Labs operated 14 separate web applications maintained by distinct squads, resulting in severe visual drift, redundant implementations, and repeated accessibility defects. They required an overarching design system that would unify user experience without degrading page load times.",
        approach="We instituted an HSL semantic token hierarchy separating core brand primitives from application-level aliases. In collaboration with engineering, we authored 36 headless React primitives relying purely on native CSS custom properties, eliminating runtime CSS-in-JS bundle overhead.",
        decisions="Avoided heavyweight component libraries in favor of accessible native HTML5 elements wrapped in semantic token slots. Mandated automated axe-core accessibility checks on pull requests, blocking merges that introduced WCAG AA contrast or ARIA attribute violations.",
        outcome="The system cut cross-team design-to-release turnaround by 45%. All 14 applications reached 100% WCAG 2.1 AA compliance, and initial bundle footprints dropped by an average of 42KB per application.",
        pullQuote="A design system is only as durable as the constraints it makes effortless to obey.",
        stats=[
            StatFigure(value="−45%", label="Dev Handoff Time"),
            StatFigure(value="14", label="Apps Migrated"),
            StatFigure(value="100%", label="WCAG AA Pass")
        ],
        imagePairs=[
            ImagePair(
                url="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
                caption="Token hierarchy & semantic alias definitions"
            ),
            ImagePair(
                url="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                caption="Interactive component testing harness & token previewer"
            )
        ]
    ),
    Project(
        slug="vanguard-analytics",
        title="Vanguard Observability",
        client="Vanguard Cloud",
        year="2023",
        role="Staff Product Designer",
        summary="High-density metrics workspace processing 2M events/sec for cloud infrastructure engineers.",
        featured=True,
        heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        thumbnail="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
        brief="DevOps engineers handling live outages were drowning in alert noise and fragmented monitoring dashboards. The existing UI suffered from slow rendering, excessive card borders, and lack of keyboard navigation during time-critical incidents.",
        approach="We rebuilt the workspace around an editorial tabular grid. High-frequency telemetry streams were rendered using mono tabular figures, inline micro sparklines, and a global Command+K interface allowing operators to isolate clusters in keystrokes.",
        decisions="Rejected traditional card-and-shadow layouts in favor of subtle 1px hairlines and strict information density tiers. Ensured all interactive rows maintain 44px hit-targets while maintaining 24-row visible density per screen.",
        outcome="Mean time to incident isolation decreased by 38%. Over 92% of surveyed infrastructure engineers adopted keyboard shortcuts as their primary navigation method within the first thirty days.",
        pullQuote="When seconds dictate server uptime, visual calm is not an aesthetic choice — it is a safety feature.",
        stats=[
            StatFigure(value="−38%", label="Task Time in Outage"),
            StatFigure(value="2M", label="Events / Second"),
            StatFigure(value="92%", label="Keyboard Palette Adoption")
        ],
        imagePairs=[
            ImagePair(
                url="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
                caption="Real-time telemetry table with inline sparklines"
            ),
            ImagePair(
                url="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
                caption="Command-K modal query syntax with instant preview"
            )
        ]
    ),
    Project(
        slug="monograph-publishing",
        title="Monograph Editorial CMS",
        client="Stiftung Buchkunst",
        year="2023",
        role="Design Lead & Frontend Architect",
        summary="Digital publishing platform and catalog engine celebrating European book design and longform print typography.",
        featured=True,
        heroImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
        thumbnail="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80",
        brief="Stiftung Buchkunst commissioned a digital archive to honor the centenary of European publication design, requiring an interactive reading experience that matched the typographic dignity of fine printed volumes.",
        approach="Engineered a 12-column editorial grid with asymmetric 7/5 column pairings, variable serif typography, and strict vertical rhythm. Designed page turn gestures and hairline section breaks inspired by classical Swiss typography.",
        decisions="Refused intrusive popups, floating banners, and infinite scroll pagination. Each catalog entry opens like an archival monograph spread with high-fidelity plate photography and bibliographical footnotes.",
        outcome="Awarded European Digital Archive of the Year 2023. Visitor average session length rose to 6.4 minutes (3.2x increase), with zero cumulative layout shift across desktop and mobile devices.",
        pullQuote="Respecting the printed page in a browser means honoring whitespace, rhythm, and silence.",
        stats=[
            StatFigure(value="3.2×", label="Session Duration"),
            StatFigure(value="60fps", label="Page Transitions"),
            StatFigure(value="0kb", label="Font Layout Shift")
        ],
        imagePairs=[
            ImagePair(
                url="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
                caption="Typographic specimen detail & editorial grid structure"
            ),
            ImagePair(
                url="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
                caption="Archival monograph viewer with dual plate references"
            )
        ]
    ),
    Project(
        slug="aurora-health",
        title="Aurora Patient Telehealth",
        client="Aurora Health Tech",
        year="2022",
        role="Senior Frontend Product Engineer",
        summary="Accessible consultation portal delivering low-bandwidth clinical video and prescription management.",
        featured=True,
        heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        thumbnail="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
        brief="Rural health clinics needed a browser-based consultation system for elderly and disabled patients connecting on unstable cellular signals and older mobile devices.",
        approach="Created a lightweight React portal with progressive enhancement, high-contrast typography, offline state recovery, and end-to-end screen reader testing.",
        decisions="Avoided heavy client-side UI libraries; built minimal accessible DOM elements with SVG iconography embedded directly, delivering a total initial bundle size under 85KB.",
        outcome="Successfully powered over 180,000 telemedicine appointments. Achieved 0.8s First Contentful Paint over 3G networks and maintained a 99.4% call completion rate.",
        pullQuote="In healthcare software, clarity and accessibility are non-negotiable ethical requirements.",
        stats=[
            StatFigure(value="180k+", label="Consultations"),
            StatFigure(value="0.8s", label="FCP on 3G"),
            StatFigure(value="99.4%", label="Call Completion")
        ],
        imagePairs=[
            ImagePair(
                url="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
                caption="Patient check-in interface with high-contrast audio test"
            ),
            ImagePair(
                url="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
                caption="Prescription timeline & doctor follow-up notes"
            )
        ]
    )
]

EXPERIENCE_DATA: List[ExperienceItem] = [
    ExperienceItem(
        id="1",
        role="Bachelor of Science (Computer Science)",
        company="Mumbai University — CGPA: 8.00 / 10",
        period="Graduated",
        scope="Rigorous foundation in algorithms, data structures, database management systems (DBMS), software engineering, and full-stack development."
    ),
    ExperienceItem(
        id="2",
        role="Full Stack Developer & Open Source Creator",
        company="GitHub — github.com/manasmaydeo8",
        period="2023 — Present",
        scope="Building responsive web applications (Habitly, Astro, Eventora, ShopKart) with React, Node.js, Express, Python, and MongoDB."
    ),
    ExperienceItem(
        id="3",
        role="Technical Certifications & Bootcamps",
        company="LetsUpgrade & LearnTube",
        period="2023 — 2024",
        scope="Completed verified intensive bootcamps in Python, React.js, Modern HTML5/CSS3 Web Design, and Technical Project Management."
    ),
    ExperienceItem(
        id="4",
        role="Higher Secondary Certificate (HSC) in Science",
        company="J.S.M College Alibag — Raigad",
        period="2021 — 2022",
        scope="Specialized in Physics, Chemistry, Mathematics, and Computer Science fundamentals."
    )
]

TESTIMONIALS_DATA: List[TestimonialItem] = [
    TestimonialItem(
        id="1",
        quote="Manas has that vanishingly rare dual mastery: the typographic sensitivity of an editorial art director combined with the rigorous architectural discipline of a senior frontend engineer. He builds interfaces that look effortless and never break.",
        author="Dr. Elena Vance",
        title="VP of Product",
        company="Kinetic Labs"
    ),
    TestimonialItem(
        id="2",
        quote="During our cloud observability overhaul, Manas translated complex telemetry requirements into a calm, dense, keyboard-driven UI that our site reliability engineers love. His work directly cut our incident response times.",
        author="Marcus Lindqvist",
        title="Principal Infrastructure Architect",
        company="Vanguard Cloud"
    ),
    TestimonialItem(
        id="3",
        quote="His understanding of grid systems, proportions, and typographic rhythm is unmatched. Manas doesn't just build websites; he crafts digital monographs that honor the craft of publishing.",
        author="Sophie Renard",
        title="Editorial Director",
        company="Stiftung Buchkunst"
    )
]

MESSAGES_STORE: List[ContactMessage] = []

# -----------------------------------------------------------------------------
# Endpoints
# -----------------------------------------------------------------------------

@app.get("/api/", tags=["Health"])
def get_health():
    return {
        "status": "ok",
        "app": "Manas Maydeo Portfolio API",
        "version": "1.0.0",
        "environment": "production"
    }

@app.get("/api/profile", response_model=Profile, tags=["Content"])
def get_profile():
    return PROFILE_DATA

@app.get("/api/projects", response_model=List[Project], tags=["Content"])
def get_projects(featured_only: bool = False):
    if featured_only:
        return [p for p in PROJECTS_DATA if p.featured]
    return PROJECTS_DATA

@app.get("/api/projects/{slug}", response_model=Project, tags=["Content"])
def get_project_by_slug(slug: str):
    for project in PROJECTS_DATA:
        if project.slug == slug:
            return project
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Project with slug '{slug}' not found"
    )

@app.get("/api/experience", response_model=List[ExperienceItem], tags=["Content"])
def get_experience():
    return EXPERIENCE_DATA

@app.get("/api/testimonials", response_model=List[TestimonialItem], tags=["Content"])
def get_testimonials():
    return TESTIMONIALS_DATA

@app.post("/api/contact", status_code=status.HTTP_201_CREATED, tags=["Contact"])
def post_contact(message_in: ContactMessageCreate):
    new_id = len(MESSAGES_STORE) + 1
    new_message = ContactMessage(
        id=new_id,
        name=message_in.name,
        email=message_in.email,
        subject=message_in.subject,
        message=message_in.message,
        createdAt=datetime.now(timezone.utc).isoformat()
    )
    MESSAGES_STORE.append(new_message)
    return {
        "status": "success",
        "message": "Thank you — I'll reply within two working days.",
        "id": new_id
    }
