TRCY
This repository contains a modified version of Grafana, adapted for use within the MyCompany SaaS platform.

Legal & Licensing Notice * Original Software: Grafana (https://github.com/grafana/grafana) * Original Author: Grafana Labs (https://grafana.com) * License: GNU Affero General Public License v3.0 (AGPLv3)
Modifications Made: Pursuant to Section 5(a) of the AGPLv3, notice is hereby given that this software has been modified by DevWorx:
Customized TypeScript and frontend components to adapt the user interface for our platform layout.
Removed default branding elements and external news feed integrations. ---  How to Build and Run with Docker To run this modified version of Grafana, you need to build the Docker image using the Dockerfile located in the root directory.
1. Build the Custom Image Run the following command in the root folder to compile the source code and package it into a container:
docker build
-t my-custom-grafana:13.0.1-custom
-f Dockerfile
.

2. Run the Container Start the containerized application by mapping the port and securing your configuration:
docker run --rm
--name grafana-custom
-p 3000:3000
my-custom-grafana:13.0.1-custom
