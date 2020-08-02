from collections import namedtuple
props = ['name', 'id', 'email']
Employee = namedtuple('Employee', props)
Manager = namedtuple('Manager', [*props, 'office_number'])
Engineer = namedtuple('Engineer', [*props, 'github'])
Intern = namedtuple('Intern', [*props, 'school'])


