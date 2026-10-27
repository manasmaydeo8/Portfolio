/**
 * Dynamic Resume PDF Exporter & Viewer Utility
 * Dynamically imported to prevent heavy bundle overhead on initial load
 */
export async function viewResumePDF(profileData, experienceData, educationData) {
  // Generate print-friendly document stream / printable window
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Popup blocked. Please allow popups to view the resume document.');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${profileData.name} — Executive Curriculum Vitae</title>
      <style>
        @page { margin: 1.5cm; }
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: #111827;
          line-height: 1.5;
          margin: 0;
          padding: 20px;
        }
        h1 { margin: 0 0 4px 0; font-size: 24px; color: #1e1b4b; }
        .title { font-size: 15px; color: #4338ca; font-weight: 600; margin-bottom: 12px; }
        .contacts { font-size: 12px; color: #4b5563; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 18px; }
        .contacts a { color: #4338ca; text-decoration: none; }
        h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #4338ca; border-bottom: 2px solid #e0e7ff; padding-bottom: 4px; margin: 20px 0 10px 0; }
        p { font-size: 12.5px; color: #374151; margin: 0 0 10px 0; }
        .item { margin-bottom: 16px; }
        .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; color: #111827; }
        .company { color: #4338ca; font-weight: 500; font-size: 12px; margin-bottom: 6px; }
        ul { margin: 6px 0; padding-left: 18px; font-size: 12px; color: #374151; }
        li { margin-bottom: 4px; }
        .skills-tag { display: inline-block; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; margin-right: 4px; }
        @media print {
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 20px; text-align: right;">
        <button onclick="window.print()" style="padding: 8px 18px; background: #4338ca; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
          Print / Save as PDF
        </button>
      </div>

      <h1>${profileData.name}</h1>
      <div class="title">${profileData.title} (${profileData.experienceYears} Years Commercial Experience)</div>
      <div class="contacts">
        Email: ${profileData.email} &bull; Location: ${profileData.location} &bull; 
        GitHub: <a href="${profileData.socialLinks.github}">${profileData.socialLinks.github}</a> &bull; 
        LinkedIn: <a href="${profileData.socialLinks.linkedin}">${profileData.socialLinks.linkedin}</a>
      </div>

      <h2>Executive Summary</h2>
      <p>${profileData.bioShort}</p>

      <h2>Commercial Leadership &amp; Experience</h2>
      ${experienceData
        .map(
          (exp) => `
        <div class="item">
          <div class="item-header">
            <span>${exp.role}</span>
            <span>${exp.period}</span>
          </div>
          <div class="company">${exp.company} &bull; ${exp.location}</div>
          <p>${exp.description}</p>
          <ul>
            ${exp.achievements.map((ach) => `<li>${ach}</li>`).join('')}
          </ul>
          <div>
            ${exp.skills.map((s) => `<span class="skills-tag">${s}</span>`).join('')}
          </div>
        </div>
      `
        )
        .join('')}

      <h2>Education &amp; Credentials</h2>
      ${educationData
        .map(
          (edu) => `
        <div class="item">
          <div class="item-header">
            <span>${edu.title}</span>
            <span>${edu.period}</span>
          </div>
          <div class="company">${edu.institution}</div>
          <p>${edu.details}</p>
        </div>
      `
        )
        .join('')}
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
