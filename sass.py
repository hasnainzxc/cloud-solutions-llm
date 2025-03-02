import requests
import os

font_urls = {
    "DejaVuSans.ttf": "https://github.com/dejavu-fonts/dejavu-fonts/raw/master/ttf/DejaVuSans.ttf",
    "DejaVuSans-Bold.ttf": "https://github.com/dejavu-fonts/dejavu-fonts/raw/master/ttf/DejaVuSans-Bold.ttf",
    "DejaVuSans-Oblique.ttf": "https://github.com/dejavu-fonts/dejavu-fonts/raw/master/ttf/DejaVuSans-Oblique.ttf"
}

def download_font_if_missing(filename, url):
    if not os.path.exists(filename):
        print(f"Downloading {filename}...")
        response = requests.get(url)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
        else:
            raise Exception(f"Failed to download {filename}. Status code: {response.status_code}")
    else:
        print(f"{filename} already exists, skipping download.")

# Download each font file
for font_file, url in font_urls.items():
    download_font_if_missing(font_file, url)

# # Download the font files

# for font_file, url in font_urls.items():
    if not os.path.exists(font_file):
        download_font_if_missing(font_file, url)
    else:
        print(f"{font_file} already exists, skipping download.")
# Define a custom PDF class with header and footer
class PDF(FPDF):
    def header(self):
        self.set_font("DejaVu", "B", 16)
        self.cell(0, 10, "GPU Server & Cloud Infrastructure Options", ln=1, align="C")
        self.ln(2)
    
    def footer(self):
        self.set_y(-15)
        self.set_font("DejaVu", "I", 8)
        self.cell(0, 10, f"Page {self.page_no()}", 0, 0, "C")

# Create PDF instance
pdf = PDF()

# Add DejaVu fonts
pdf.add_font("DejaVu", "", "DejaVuSans.ttf", uni=True)
pdf.add_font("DejaVu", "B", "DejaVuSans-Bold.ttf", uni=True)
pdf.add_font("DejaVu", "I", "DejaVuSans-Oblique.ttf", uni=True)
# Add a page
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# Set font for content
pdf.set_font("DejaVu", "", 12)

# Document content
content = """
Introduction:
This document provides a structured overview of how to acquire GPU resources for your SaaS Cloud & AI Model Provisioning Platform. It covers three main strategies—renting dedicated GPU servers, buying & co-locating physical hardware, and leasing dedicated GPU servers—along with key providers and resource links for further exploration.

1. Renting Dedicated GPU Servers (Managed & Cloud-based)
Description:
For on-demand, hassle-free GPU access without managing hardware.

Providers:
• Lambda Labs: 
  - GPUs: NVIDIA A100, H100, RTX 4090
  - Pricing: ~$1.99–$3.50/hr
  - Features: Dedicated bare metal servers optimized for AI
  - Link: https://lambdalabs.com

• Vast.ai: 
  - GPUs: A100, RTX 3090/4090
  - Pricing: Around ~$1.00/hr (spot pricing)
  - Features: Diverse vendor options
  - Link: https://vast.ai

• RunPod: 
  - GPUs: A100, RTX 4090
  - Pricing: ~$0.70–$2.00/hr
  - Features: Low-cost, custom AI workflows
  - Link: https://runpod.io

• Paperspace: 
  - GPUs: Range from A100 to P4000-P6000
  - Pricing: ~$0.40–$3.00/hr
  - Features: On-demand & managed services for AI
  - Link: https://www.paperspace.com

• Genesis Cloud: 
  - GPUs: NVIDIA A100, V100
  - Pricing: Starting at ~$1/hr
  - Features: EU-based infrastructure focused on AI training
  - Link: https://www.genesiscloud.com

Approach:
• Evaluate your performance and cost needs.
• Test deployment using short-term trials.
• Scale resources based on application growth.

2. Buying & Co-Locating Physical GPU Servers
Description:
For full control over hardware by purchasing your own GPU servers and hosting them in a data center.

Providers:
• OVHCloud:
  - Location: Global
  - Cost: Starts at ~$100/mo
  - Features: Bare-metal servers with NVMe storage options
  - Link: https://ovhcloud.com

• Hetzner:
  - Location: EU
  - Cost: Starts at ~$50/mo
  - Features: Competitive pricing on dedicated servers
  - Link: https://hetzner.com

• ColoCrossing:
  - Location: USA
  - Cost: Custom Pricing
  - Features: Enterprise-grade co-location services
  - Link: https://www.colocrossing.com

Approach:
• Procure the desired GPU server components (e.g., NVIDIA A100 or RTX 4090, AMD EPYC or Intel Xeon CPUs, NVMe SSDs).
• Select a data center based on location and support.
• Ensure redundancy with backup power and cooling solutions.

3. Leasing Dedicated GPU Servers
Description:
A longer-term solution without the upfront cost of purchasing hardware.

Providers:
• Hivelocity:
  - GPUs: Options include A100, RTX 4090, V100
  - Pricing: Starts around ~$300/mo
  - Link: https://www.hivelocity.net

• Leaseweb:
  - GPUs: A100, P100, RTX 3090
  - Pricing: Custom pricing
  - Link: https://www.leaseweb.com

• Equinix Metal:
  - GPUs: V100, various RTX models
  - Pricing: Hourly/Monthly pay-per-use options
  - Link: https://equinix.com

Approach:
• Conduct cost analysis comparing leasing vs. cloud rentals.
• Look for flexible contract terms that scale with your usage.
• Verify service level agreements (SLAs) for uptime and support.

4. How to Approach the Decision Process
• Define Your Requirements: Assess performance needs, budget constraints, and scalability.
• Evaluate Providers: Start with short-term trials using cloud-based providers.
• Plan for Integration: Set up a Kubernetes cluster and CI/CD pipelines for seamless deployment.
• Scale and Optimize: Monitor performance (e.g., using Prometheus and Grafana) and review billing regularly.

5. Next Steps
• Step 1: Experiment with cloud GPU rentals (e.g., Lambda Labs, Vast.ai).
• Step 2: Set up a prototype (MVP) integrating cloud hosting with basic AI model deployment.
• Step 3: Evaluate long-term options based on performance and usage forecasts.
• Step 4: Plan for integration and scaling with robust monitoring, security, and automation.

Conclusion:
By following the approaches outlined above and leveraging the provided resources, you can confidently select and integrate the optimal GPU infrastructure for your SaaS Cloud & AI Model Provisioning Platform.
"""

# Add content to PDF using multi_cell
pdf.multi_cell(0, 8, content.strip())

# Output PDF file
output_filename = "SaaS_GPU_Infrastructure.pdf"
pdf.output(output_filename)

print(f"PDF document '{output_filename}' has been generated successfully!")