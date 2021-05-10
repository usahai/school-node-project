# school-node-project

## Overview

This project will run a simple node backend service that will allow the user to insert records into the DB and generate a report

## How to run

npm run start

## Inserting Records

You can insert records at the API /api/register with the object in the request body

## Generating report

The data present in the file is not sufficient to generate the report. As such, an additional file has been provided in the root directory 'additionalEntries.sql' that will allow you to populate the adjoining tables. This will link the teachers to the classes and subjects.

Once the supplementary data has been added, you can hit generate the report by hitting /api/report/workload
