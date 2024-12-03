export class CustomMap {
  url =
    'https://www.google.com/maps/embed/v1/directions?key=[Your_google_map_key]&avoid=tolls|highways&';
  constructor(
    public source_location: string,
    public destination_location: string
  ) {}

  createUrl(): string {
    console.log(this.destination_location);

    return (
      this.url +
      `origin=${this.source_location}&destination=${this.destination_location}`
    );
  }

  appendMap(): void {
    console.log('Inside the appendMap');
    let iframe = document.getElementById('iframe');
    if (iframe) {
      iframe.setAttribute('src', this.createUrl());
      iframe.setAttribute('width', '800');
      iframe.setAttribute('height', '500');
      iframe.setAttribute('style', 'display:flex;');
    }
  }
}
