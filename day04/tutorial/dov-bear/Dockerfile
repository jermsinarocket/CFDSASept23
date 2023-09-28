FROM golang:1.21-alpine3.18 AS builder

WORKDIR /app

COPY go.mod .
COPY go.sum .
COPY main.go .

# install gcc
RUN apk add build-base

RUN CGO_ENABLED=1 go build -o main ./...
#RUN go build -o main ./...

FROM alpine:3.18

WORKDIR /app

RUN apk --no-cache add curl

COPY --from=builder /app/main .
COPY public public
COPY templates templates

ENV PORT=3000 INSTANCE_NAME="dov bear" INSTANCE_HASH="abc123"

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
   CMD curl -X GET -sf http://localhost:${PORT}/healthz || exit 1

EXPOSE ${PORT}

ENTRYPOINT /app/main