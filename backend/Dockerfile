ARG PLONE_VERSION=6.0.0b1
FROM plone/plone-backend:${PLONE_VERSION}

LABEL maintainer="Interlegis <gitec.interlegis@gmail.com>" \
      org.label-schema.name="gitec.interlegis.leg.br-backend" \
      org.label-schema.description="Portal GITEC backend image." \
      org.label-schema.vendor="Interlegis"

# Add local code
COPY . .

# Install local requirements and fix permissions
RUN ./bin/pip install -r requirements.txt \
    && chown -R plone: /app
