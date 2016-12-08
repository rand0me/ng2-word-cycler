import { TestBed, inject } from '@angular/core/testing';
import { ReflectiveInjector, Provider } from '@angular/core';
import { WordCyclerModule, WordCyclerComponent } from './word-cycler';
import { Subscription } from 'rxjs/Subscription';

declare var describe: any;
declare var expect:   any;
declare var it:       any;

export default describe('something', () => {
    it('should work', () => {
        expect(true).toBe(true);
    });
    it('should also work', () => {
      expect(false).toBe(false);
    });
});
