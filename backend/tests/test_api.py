"""
Backend API Unit Tests - Manas Maydeo Portfolio
Covers health, profile, projects, experience, testimonials, contact endpoints.
"""

def test_api_health(client):
    response = client.get("/api/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "Manas Maydeo" in data["app"]

def test_api_profile(client):
    response = client.get("/api/profile")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Manas Maydeo"
    assert "India" in data["location"]
    assert "Languages & Backend" in data["skills"]
    assert "Frontend & UI" in data["skills"]
    assert "Databases & Tools" in data["skills"]

def test_api_projects_list(client):
    response = client.get("/api/projects")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    slugs = [p["slug"] for p in data]
    assert "kinetic-design-system" in slugs
    assert "vanguard-analytics" in slugs

def test_api_projects_featured(client):
    response = client.get("/api/projects?featured_only=true")
    assert response.status_code == 200
    data = response.json()
    assert all(p["featured"] is True for p in data)

def test_api_project_detail_success(client):
    response = client.get("/api/projects/kinetic-design-system")
    assert response.status_code == 200
    data = response.json()
    assert data["slug"] == "kinetic-design-system"
    assert data["title"] == "Kinetic Design System"
    assert len(data["stats"]) == 3
    assert len(data["imagePairs"]) == 2
    assert "brief" in data

def test_api_project_detail_not_found(client):
    response = client.get("/api/projects/unknown-case-study")
    assert response.status_code == 404
    data = response.json()
    assert "not found" in data["detail"].lower()

def test_api_experience_list(client):
    response = client.get("/api/experience")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 4
    assert any("Mumbai University" in exp["company"] for exp in data)

def test_api_testimonials_list(client):
    response = client.get("/api/testimonials")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 3
    assert any("Elena Vance" in t["author"] for t in data)

def test_api_contact_submission_success(client):
    payload = {
        "name": "Alex Becker",
        "email": "alex.becker@example.com",
        "subject": "Full-time role",
        "message": "We would love to discuss a Staff Product Designer position with our team."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["status"] == "success"
    assert "two working days" in data["message"]
    assert "id" in data

def test_api_contact_validation_short_message(client):
    payload = {
        "name": "Alex Becker",
        "email": "alex.becker@example.com",
        "subject": "Full-time role",
        "message": "Too short"
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422

def test_api_contact_validation_invalid_email(client):
    payload = {
        "name": "Alex Becker",
        "email": "not-an-email",
        "subject": "Freelance project",
        "message": "This is a detailed message for a new consulting engagement."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422
