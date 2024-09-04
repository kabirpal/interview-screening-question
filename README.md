# interview-screening-question

<center>
    <img src="./src/assets/Screenshot 2024-09-04 104948.png" alt="Change Detection" />
</center>

## Default Change Detection Strategy:

1. Triggers change detection for the entire component tree when any event or data change occurs.
2. The parent component's change detection will run, causing all children to be checked.


## OnPush Change Detection Strategy:

Only triggers when:
1. An @Input reference changes.
2. An event is emitted from the component.
3. An observable emits a new value.
4. ChangeDetectorRef.markForCheck() or ChangeDetectorRef.detectChanges() is called manually.


### Service Provided at Root Level:

1. The counterService is provided at the root level by default using providedIn: 'root'. This means there is a single instance of this service available throughout the entire application unless overridden by a lower-level provider.
Service Provided at Parent Component Level:

### In the ParentComponent, 
1. I have provided the counterService using the providers array. This creates a new instance of counterService specifically for ParentComponent and its descendants unless overridden.

### Service Provided at Child Component Level:
1. In the ChildComponent, I have provided the counterService again using the providers array. This creates another new instance of counterService specifically for ChildComponent.


Separate Instances: Both parent and child have their own instances of counterService and therefore have their own counters.

## Benefits and Use Cases of Hierarchical DI
1. Scoped Instances: You can create separate instances of a service for different parts of the application. This is useful for cases where you need to maintain state within specific components or modules.

2. Optimized Memory Usage: Services provided at a component level are destroyed when the component is destroyed, helping to manage memory and performance more efficiently.

3. Fine-Grained Control: You have better control over the lifecycle and scope of services, which is helpful in complex applications with nested components and different service requirements.


#### Hierarchical DI in Angular is a powerful feature that allows developers to manage services more effectively, offering flexibility in how services are shared or isolated across an application.
