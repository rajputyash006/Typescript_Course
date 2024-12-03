import { CustomMap } from './CustomMap';
export class User {
  getUserInput() {
    document
      .getElementById('locationInput')
      ?.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        let sourceDir = document.getElementById(
          'sourceLocation'
        ) as HTMLInputElement;
        let DestinationDir = document.getElementById(
          'destinationLocation'
        ) as HTMLInputElement;
        this.viewDirection(sourceDir.value, DestinationDir.value);
      });
  }

  viewDirection(source: string, destination: string) {
    let map = new CustomMap(source, destination);
    map.appendMap();
  }
}
