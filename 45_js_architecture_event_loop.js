// primitive data types are stored in stack memory (call stack)
// no primitive stored in heap memory

// also all synchronous execution happens in call stack
// if there are for example console.log statements, they are one by one send to call stack and are executed immediately. since this is sync code, other statement executes after completion of first statement

// execution of code from stack and heap is done by javascript engine

// same goes for function. when it is called it goes in call stack and js engine searches for its definition in heap memory and the function is executed
// if it was an object to be stored, it will be stored in heap memory and the variables would to be linked to the object from the call stack

// how does async code get executed? 
// web apis(browsers) is an entitiy that helps the js to execute code and adds functionality in js engine. it has hold of things like dom, ajax(xml http requests) and timer(settimeout, setinterval)
// as sync code is executed using stack, async code is executed using queue. they are of two types micro stask queue and macro task queue
// micro task queue -> execution of async await, promises, callbacks. this queue has more priority over other queue
// macro task queue -> timer events

// first the code is recognized as sync or async. if async, then it does not go inside callstack
// whatever the timer is for that code(time to wait as in settimeout), that time is sent to the timer of web apis. basically it is handled by web apis
// after the timer has finished waiting, it is sent to the one of the task queues according to the type of async code. it will wait there for execution

// rest of the sync code does not wait for this async code and will continue to execute as the call stack is empty and there is nothing to wait

// there is a manager that looks and manages all this execution. it is called event loop
// it keeps a track of two things -> call stack and task queues

// now callstack after executing all the sync code is empty. event loop therefore send task from task queues one by one in the callstack to be executed

// hence even if a settimeout over a function is of 0ms, it does not execute because it never reaches the callstack. web api holds the execution for 0ms and then sends it to task queue. but then it is sent over to the callstack to be executed after sync code is completed and the callstack is empty

// in the task queue the tasks will be arranged and will be taken out by the queue in the fifo manner. hence if contains promises, async await together, it will be executed based on fifo